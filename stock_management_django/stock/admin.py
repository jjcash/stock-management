from django.contrib import admin
from .models import LocalizacaoEstoque, Chapa, TipoDePedra

@admin.register(LocalizacaoEstoque)
class LocalizacaoEstoqueAdmin(admin.ModelAdmin):
    list_display = ('codigo', 'descricao')
    search_fields = ('codigo', 'descricao')

@admin.register(TipoDePedra)
class TipoDePedraAdmin(admin.ModelAdmin):
    list_display = ('nome',)
    search_fields = ('nome',)

@admin.register(Chapa)
class ChapaAdmin(admin.ModelAdmin):
    list_display = ('codigo', 'comprimento', 'largura', 'espessura', 'tipo_de_pedra', 'localizacao_estoque', 'status', 'data_entrada', 'data_saida')
    list_filter = ('tipo_de_pedra', 'status')
    search_fields = ('codigo', 'defeitos_superficiais')
    readonly_fields = ('qr_code',)
