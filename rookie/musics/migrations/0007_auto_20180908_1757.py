# Generated by Django 2.0.7 on 2018-09-08 08:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('musics', '0006_music_server_img'),
    ]

    operations = [
        migrations.AlterField(
            model_name='music',
            name='Server_img',
            field=models.ImageField(blank=True, default='', upload_to='music/albumart'),
        ),
    ]