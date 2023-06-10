from rest_framework import serializers
from .models import Project, ProjectImage, Contact, GeneralInformation, CertificateImage, Resume, Account

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
    def to_representation(self, instance):
        data = super().to_representation(instance)
        request = self.context.get('request')
        
        # Remove the base URL from the image URLs
        if 'document' in data:
            data['document'] = instance.document.url if instance.document else None

        
        return data

class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = '__all__'


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'

class GeneralInformationSerializer(serializers.ModelSerializer):
    class Meta:
        model = GeneralInformation
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        request = self.context.get('request')
        
        # Remove the base URL from the image URLs
        if 'image' in data:
            data['image'] = instance.image.url if instance.image else None

        if 'slide1' in data:
            data['slide1'] = instance.slide1.url if instance.slide1 else None
        if 'slide2' in data:
            data['slide2'] = instance.slide2.url if instance.slide2 else None
        if 'slide3' in data:
            data['slide3'] = instance.slide3.url if instance.slide3 else None
        if 'slide4' in data:
            data['slide4'] = instance.slide4.url if instance.slide4 else None

        if 'slide5' in data:
            data['slide5'] = instance.slide5.url if instance.slide5 else None
        # Repeat the above code for slide2, slide3, slide4, slide5

        return data

class CertificateImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = CertificateImage
        fields = '__all__'

class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        request = self.context.get('request')
        
        for item in data:
            if item == 'image':
                data[item] = instance.image.url if instance.image else None
        return data

            

class ResumeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resume
        fields = '__all__'

    def to_representation(self, instance):
        data = super().to_representation(instance)
        request = self.context.get('request')
        
        # Remove the base URL from the image URLs
        if 'image' in data:
            data['image'] = instance.image.url if instance.image else None

        if 'pdf' in data:
            data['pdf'] = instance.pdf.url if instance.pdf else None

        return data