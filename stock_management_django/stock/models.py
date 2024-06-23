from django.db import models

class TipoDePedra(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()

    def __str__(self):
        return self.nome

class LocalizacaoEstoque(models.Model):
    codigo = models.CharField(max_length=50, unique=True)
    localizacao = models.CharField(max_length=100)
    descricao = models.CharField(max_length=255)

    def __str__(self):
        return self.codigo

class Chapa(models.Model):
    codigo = models.CharField(max_length=50, unique=True)
    comprimento = models.DecimalField(max_digits=10, decimal_places=2)
    largura = models.DecimalField(max_digits=10, decimal_places=2)
    espessura = models.DecimalField(max_digits=5, decimal_places=2)
    tipo_de_pedra = models.ForeignKey(TipoDePedra, on_delete=models.CASCADE)
    defeitos_superficiais = models.TextField(blank=True, null=True)
    qr_code = models.CharField(max_length=255)
    localizacao_estoque = models.ForeignKey(LocalizacaoEstoque, on_delete=models.SET_NULL, null=True)
    data_entrada = models.DateTimeField(auto_now_add=True)
    data_saida = models.DateTimeField(blank=True, null=True)
    status = models.CharField(max_length=50)

    def __str__(self):
        return self.codigo

class Sobra(models.Model):
    chapa_origem = models.ForeignKey(Chapa, on_delete=models.CASCADE)
    comprimento = models.DecimalField(max_digits=10, decimal_places=2)
    largura = models.DecimalField(max_digits=10, decimal_places=2)
    espessura = models.DecimalField(max_digits=5, decimal_places=2)
    geometria = models.TextField()  # Representação da geometria da sobra
    localizacao_estoque = models.ForeignKey(LocalizacaoEstoque, on_delete=models.SET_NULL, null=True)
    qr_code = models.CharField(max_length=255)
    data_entrada = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50)

    def __str__(self):
        return f"Sobra de {self.chapa_origem.codigo}"

class EntradaSaida(models.Model):
    TIPO_CHOICES = (
        ('entrada', 'Entrada'),
        ('saida', 'Saída'),
    )
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES)
    chapa = models.ForeignKey(Chapa, null=True, blank=True, on_delete=models.SET_NULL)
    sobra = models.ForeignKey(Sobra, null=True, blank=True, on_delete=models.SET_NULL)
    data = models.DateTimeField(auto_now_add=True)
    quantidade = models.PositiveIntegerField()
    descricao = models.TextField()

    def __str__(self):
        return f"{self.tipo.capitalize()} - {self.chapa or self.sobra}"
