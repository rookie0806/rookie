from django.apps import AppConfig


class UsersAppConfig(AppConfig):

    name = "rookie.users"
    verbose_name = "Users"

    def ready(self):
        try:
            from .signals import user_signed_up
        except ImportError:
            pass
