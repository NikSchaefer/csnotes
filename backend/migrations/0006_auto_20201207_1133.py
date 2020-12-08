# Generated by Django 3.0.7 on 2020-12-07 17:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0005_auto_20201207_1132'),
    ]

    operations = [
        migrations.AlterField(
            model_name='analytics',
            name='img_source',
            field=models.CharField(default='/static/Images/', max_length=60),
        ),
        migrations.AlterField(
            model_name='auth',
            name='img_source',
            field=models.CharField(default='/static/Images/', max_length=60),
        ),
        migrations.AlterField(
            model_name='backend',
            name='img_source',
            field=models.CharField(default='/static/Images/', max_length=60),
        ),
        migrations.AlterField(
            model_name='database',
            name='img_source',
            field=models.CharField(default='/static/Images/', max_length=60),
        ),
        migrations.AlterField(
            model_name='frontend',
            name='img_source',
            field=models.CharField(default='/static/Images/', max_length=60),
        ),
        migrations.AlterField(
            model_name='hosting',
            name='img_source',
            field=models.CharField(default='/static/Images/', max_length=60),
        ),
    ]