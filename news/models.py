from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    author = models.CharField(max_length=200)
    avatar = models.CharField(max_length=500)
    date = models.CharField(max_length=100)
    content = models.TextField()
    images = models.JSONField(default=list)
    likes = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.author} - {self.date}"


class NewsArticle(models.Model):
    CATEGORY_CHOICES = [
        ('Urgente', 'Urgente'),
        ('Cultura', 'Cultura'),
        ('Saúde', 'Saúde'),
        ('Esporte', 'Esporte'),
        ('Educação', 'Educação'),
    ]
    
    title = models.CharField(max_length=500)
    author = models.CharField(max_length=200)
    avatar = models.CharField(max_length=500)
    date = models.CharField(max_length=100)
    content = models.TextField()
    excerpt = models.TextField(blank=True)
    images = models.JSONField(default=list)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    is_featured = models.BooleanField(default=False)
    likes = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class Alert(models.Model):
    author = models.CharField(max_length=200)
    avatar = models.CharField(max_length=500)
    date = models.CharField(max_length=100)
    content = models.TextField()
    images = models.JSONField(default=list)
    likes = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"Alert by {self.author} - {self.date}"
