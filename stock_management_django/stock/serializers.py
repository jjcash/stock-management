from rest_framework import serializers
from .models import TipoDePedra, LocalizacaoEstoque, Chapa, Sobra, EntradaSaida

class TipoDePedraSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoDePedra
        fields = '__all__'

class LocalizacaoEstoqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = LocalizacaoEstoque
        fields = '__all__'

class ChapaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chapa
        fields = '__all__'

    def validate(self, data):
        if data['comprimento'] <= 0:
            raise serializers.ValidationError("O comprimento deve ser maior que zero.")
        if data['largura'] <= 0:
            raise serializers.ValidationError("A largura deve ser maior que zero.")
        if data['espessura'] <= 0:
            raise serializers.ValidationError("A espessura deve ser maior que zero.")
        return data

class SobraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sobra
        fields = '__all__'

class EntradaSaidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntradaSaida
        fields = '__all__'
