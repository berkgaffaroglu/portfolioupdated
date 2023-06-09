# Generated by Django 4.1.2 on 2023-06-07 22:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioRest', '0021_resume_alter_project_backend_category_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='generalinformation',
            name='upwork',
            field=models.CharField(blank=True, default='', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='backend_category',
            field=models.CharField(blank=True, choices=[('Flask', 'Flask'), ('Ruby', 'Ruby'), ('Node.js', 'Node.js'), ('Python Application', 'Python Application'), ('Django', 'Django'), ('Uncategorized', 'Uncategorized')], default='Uncategorized', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='project',
            name='frontend_category',
            field=models.CharField(blank=True, choices=[('React.js', 'React.js'), ('Vue.js', 'Vue.js'), ('Angular.js', 'Angular.js'), ('Uncategorized', 'Uncategorized')], default='Uncategorized', max_length=100, null=True),
        ),
    ]
