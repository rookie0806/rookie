# Generated by Django 2.0.7 on 2018-09-08 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('musics', '0008_auto_20180908_1800'),
    ]

    operations = [
        migrations.AlterField(
            model_name='music',
            name='Server_img',
            field=models.ImageField(default='', null=True, upload_to='music/albumart/'),
        ),
    ]
