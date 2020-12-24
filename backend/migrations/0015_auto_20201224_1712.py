# Generated by Django 3.1.4 on 2020-12-24 23:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0014_auto_20201224_1509'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tool',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(default='Hosting', max_length=30)),
                ('product', models.CharField(default='', max_length=20)),
                ('product_type', models.CharField(blank=True, default='', max_length=20)),
                ('free_tier', models.BooleanField(blank=True, default=False)),
                ('free_limit', models.CharField(blank=True, default='N/A', max_length=20)),
                ('link', models.CharField(default='/', max_length=40)),
                ('img_source', models.CharField(default='/static/Images/', max_length=60)),
            ],
        ),
        migrations.DeleteModel(
            name='Analytics',
        ),
        migrations.DeleteModel(
            name='Auth',
        ),
        migrations.DeleteModel(
            name='Backend',
        ),
        migrations.DeleteModel(
            name='Database',
        ),
        migrations.DeleteModel(
            name='Frontend',
        ),
        migrations.DeleteModel(
            name='Hosting',
        ),
    ]
