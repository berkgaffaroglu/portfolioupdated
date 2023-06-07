# Generated by Django 3.1 on 2021-04-28 23:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioRest', '0019_auto_20210429_0222'),
    ]

    operations = [
        migrations.AlterField(
            model_name='project',
            name='backend_category',
            field=models.CharField(blank=True, choices=[('Flask', 'Flask'), ('Node.js', 'Node.js'), ('Python Application', 'Python Application'), ('Ruby', 'Ruby'), ('Uncategorized', 'Uncategorized'), ('Django', 'Django')], default='Uncategorized', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='frontend_category',
            field=models.CharField(blank=True, choices=[('React.js', 'React.js'), ('Uncategorized', 'Uncategorized'), ('Vue.js', 'Vue.js'), ('Angular.js', 'Angular.js')], default='Uncategorized', max_length=100, null=True),
        ),
    ]
