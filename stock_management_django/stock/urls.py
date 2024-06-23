from rest_framework.routers import DefaultRouter
from .views import TipoDePedraViewSet, LocalizacaoEstoqueViewSet, ChapaViewSet, SobraViewSet, EntradaSaidaViewSet

router = DefaultRouter()
router.register(r'tipos-de-pedra', TipoDePedraViewSet)
router.register(r'localizacoes-estoque', LocalizacaoEstoqueViewSet)
router.register(r'chapas', ChapaViewSet)
router.register(r'sobras', SobraViewSet)
router.register(r'entradas-saidas', EntradaSaidaViewSet)

urlpatterns = router.urls
