# Generated by Django 3.1 on 2020-08-15 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioRest', '0004_auto_20200814_1507'),
    ]

    operations = [
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company_name', models.CharField(max_length=255)),
                ('e_mail', models.CharField(blank=True, max_length=255, null=True)),
                ('skype', models.CharField(blank=True, max_length=255, null=True)),
                ('content', models.TextField()),
                ('created_on', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.AlterField(
            model_name='project',
            name='backend_category',
            field=models.CharField(blank=True, choices=[('Flask', 'Flask'), ('Ruby', 'Ruby'), ('Node.js', 'Node.js'), ('Uncategorized', 'Uncategorized'), ('Django', 'Django'), ('Python Application', 'Python Application')], default='Uncategorized', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='frontend_category',
            field=models.CharField(blank=True, choices=[('React.js', 'React.js'), ('Angular.js', 'Angular.js'), ('Vue.js', 'Vue.js'), ('Uncategorized', 'Uncategorized')], default='Uncategorized', max_length=100, null=True),
        ),
    ]