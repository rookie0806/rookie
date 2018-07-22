from django.contrib.auth import get_user_model
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse
from django.views.generic import DetailView, ListView, RedirectView, UpdateView
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework import status
from rest_framework.response import Response
from . import models, serializers

User = get_user_model()

class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter

class UserDetailView(LoginRequiredMixin, DetailView):

    model = User
    slug_field = "username"
    slug_url_kwarg = "username"


user_detail_view = UserDetailView.as_view()


class UserListView(LoginRequiredMixin, ListView):

    model = User
    slug_field = "username"
    slug_url_kwarg = "username"


user_list_view = UserListView.as_view()


class UserUpdateView(LoginRequiredMixin, UpdateView):

    model = User
    fields = ["name"]

    def get_success_url(self):
        return reverse("users:detail", kwargs={"username": self.request.user.username})

    def get_object(self):
        return User.objects.get(username=self.request.user.username)


user_update_view = UserUpdateView.as_view()


class UserRedirectView(LoginRequiredMixin, RedirectView):

    permanent = False

    def get_redirect_url(self):
        return reverse("users:detail", kwargs={"username": self.request.user.username})


user_redirect_view = UserRedirectView.as_view()

class FollowUser(APIView):

    def post(self, request, user_id, format=None):
        user = request.user

        try:
            user_to_follow = models.User.objects.get(id=user_id)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        user.following.add(user_to_follow)
        user.save()
        return Response(status=status.HTTP_200_OK)

class UnfollowUser(APIView):

    def post(self, request, user_id, format=None):
        user = request.user

        try:
            user_to_unfollow = models.User.objects.get(id=user_id)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        user.following.remove(user_to_unfollow)
        user.save()

        return Response(status=status.HTTP_200_OK)


class RecommendUser(APIView):

    def get(self, request, format=None):

        recommend_user = models.User.objects.all()[:5] #추가 수정 필요함. 우선 최근 가입한 다섯명만
        serializer = serializers.UserListSerializer(recommend_user, many=True)
        return Response(data=serializer.data,status=status.HTTP_200_OK)

class UserProfile(APIView):
    
    def get(self, request, username, format=None):

        try:
            found_user = models.User.objects.get(username=username)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        serializer = serializers.UserProfileSerializer(found_user)

        return Response(data=serializer.data,status=status.HTTP_200_OK)


class UserFollower(APIView):

    def get(self, request, username, format=None):

        try:
            found_user = models.User.objects.get(username=username)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user_followers = found_user.followers.all()

        print(user_followers)

        serializer = serializers.UserProfileSerializer(user_followers,many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserFollower(APIView):

    def get(self, request, username, format=None):

        try:
            found_user = models.User.objects.get(username=username)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user_followers = found_user.followers.all()

        serializer = serializers.UserProfileSerializer(user_followers, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserFollowing(APIView):

    def get(self, request, username, format=None):

        try:
            found_user = models.User.objects.get(username=username)
        except models.User.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

        user_followings = found_user.following.all()

        serializer = serializers.UserProfileSerializer(user_followings, many=True)

        return Response(data=serializer.data, status=status.HTTP_200_OK)


class UserSearch(APIView):
    
    def get(self, request, username, format=None):

        users = models.User.objects.filter(username__icontains=username)

        serializer = serializers.UserListSerializer(users,many=True)

        return Response(serializer.data,status=status.HTTP_200_OK)
