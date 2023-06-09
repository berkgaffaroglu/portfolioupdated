from django.contrib import admin
from .models import Project, ProjectImage, Contact, GeneralInformation,CertificateImage, Resume, Account
# Register your models here.

class ProjectImageAdmin(admin.StackedInline):
    model = ProjectImage

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageAdmin]
    class Meta:
        model= Project

@admin.register(ProjectImage)
class PostImageAdmin(admin.ModelAdmin):
    pass

admin.site.register(Resume)


class CertificateImageAdmin(admin.StackedInline):
    model = CertificateImage

class AccountAdmin(admin.StackedInline):
    model = Account

@admin.register(GeneralInformation)
class GeneralInformationAdmin(admin.ModelAdmin):
    inlines = [CertificateImageAdmin, AccountAdmin]
    class Meta:
        model= GeneralInformation



@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    readonly_fields = ('title','content','company_name','e_mail','skype','created_on')
    class Meta:
        model = Contact



