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

class SobraSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sobra
        fields = '__all__'

class EntradaSaidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = EntradaSaida
        fields = '__all__'
