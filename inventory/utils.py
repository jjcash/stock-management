import qrcode
from django.core.files import File
import os

def generate_qr_code(data):
    qr = qrcode.make(data)
    qr_file_path = f'/tmp/{data}.png'
    qr.save(qr_file_path)
    return File(open(qr_file_path, 'rb'))
