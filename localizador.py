import requests

def rastrear_ip(ip_address):
    # Substitua pela sua chave de API
    API_KEY = "a072c35792254d9a94646fb00e692f9e"
    url = f"https://api.ipgeolocation.io/ipgeo?apiKey={API_KEY}&ip={ip_address}"
    
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        return {
            "IP": data.get("ip"),
            "País": data.get("country_name"),
            "Região": data.get("region_name"),
            "Cidade": data.get("city"),
            "Latitude": data.get("latitude"),
            "Longitude": data.get("longitude")
        }
    else:
        return {"Erro": "Não foi possível obter informações sobre o IP."}

# Teste com um IP
resultado = rastrear_ip("8.8.8.8")
print(resultado)