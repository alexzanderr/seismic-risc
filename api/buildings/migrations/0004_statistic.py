# Generated by Django 2.2.13 on 2021-02-05 13:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buildings', '0003_auto_20200229_1302'),
    ]

    operations = [
        migrations.CreateModel(
            name='Statistic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('people_under_risk', models.IntegerField(null=True, verbose_name='people under risk')),
                ('consolidated_buildings', models.IntegerField(null=True, verbose_name='consolidated buildings')),
            ],
            options={
                'verbose_name': 'statistic',
                'verbose_name_plural': 'statistics',
            },
        ),
    ]
