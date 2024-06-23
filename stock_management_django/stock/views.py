from rest_framework import viewsets
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
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
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['tipo_de_pedra', 'localizacao_estoque', 'espessura', 'defeitos_superficiais']
    ordering_fields = ['codigo']

class SobraViewSet(viewsets.ModelViewSet):
    queryset = Sobra.objects.all()
    serializer_class = SobraSerializer

class EntradaSaidaViewSet(viewsets.ModelViewSet):
    queryset = EntradaSaida.objects.all()
    serializer_class = EntradaSaidaSerializer
