from rest_framework import viewsets
from .models import TipoDePedra, LocalizacaoEstoque, Chapa, Sobra, EntradaSaida
from .serializers import TipoDePedraSerializer, LocalizacaoEstoqueSerializer, ChapaSerializer, SobraSerializer, EntradaSaidaSerializer

class TipoDePedraViewSet(viewsets.ModelViewSet):
    queryset = TipoDePedra.objects.all()
    serializer_class = TipoDePedraSerializer

class LocalizacaoEstoqueViewSet(viewsets.ModelViewSet):
    queryset = LocalizacaoEstoque.objects.all()
    serializer_class = LocalizacaoEstoqueSerializer

class ChapaViewSet(viewsets.ModelViewSet):
    queryset = Chapa.objects.all()
    serializer_class = ChapaSerializer

class SobraViewSet(viewsets.ModelViewSet):
    queryset = Sobra.objects.all()
    serializer_class = SobraSerializer

class EntradaSaidaViewSet(viewsets.ModelViewSet):
    queryset = EntradaSaida.objects.all()
    serializer_class = EntradaSaidaSerializer
