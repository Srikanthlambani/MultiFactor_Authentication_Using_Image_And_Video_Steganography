# Generated by Django 4.1.7 on 2023-03-24 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='OTP',
            fields=[
                ('username', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('otp', models.IntegerField()),
            ],
        ),
    ]
