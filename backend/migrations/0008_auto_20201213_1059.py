# Generated by Django 3.1.4 on 2020-12-13 16:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0007_auto_20201213_1059'),
    ]

    operations = [
        migrations.AlterField(
            model_name='cards',
            name='back',
            field=models.TextField(),
        ),
    ]