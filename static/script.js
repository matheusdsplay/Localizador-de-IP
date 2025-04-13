const API_KEY = "c6ddbf58d2a024a7f51fb0c287cea56a";

async function rastrearIP() {
  const ip = document.getElementById("ipInput").value;
  if (!ip) {
    alert("Por favor, insira um IP válido.");
    return;
  }

  try {
    const response = await fetch(`http://api.ipstack.com/${ip}?access_key=${API_KEY}`);
    const data = await response.json();

    if (data.error) {
      throw new Error("Erro na API: " + data.error.info);
    }

    document.getElementById("ip").textContent = data.ip || "-";
    document.getElementById("pais").textContent = data.country_name || "-";
    document.getElementById("regiao").textContent = data.region_name || "-";
    document.getElementById("cidade").textContent = data.city || "-";
    document.getElementById("latitude").textContent = data.latitude || "-";
    document.getElementById("longitude").textContent = data.longitude || "-";

    atualizarMapa(data.latitude, data.longitude);

  } catch (error) {
    console.warn("Erro ao buscar dados. Usando dados mock para demonstração.");

    // Dados mock (para quando a API falhar)
    const dadosMock = {
      ip: ip || "123.456.789.000",
      country_name: "Brasil",
      region_name: "São Paulo",
      city: "São Paulo",
      latitude: -23.55052,
      longitude: -46.633308
    };

    // Atualiza a UI com os dados mock
    document.getElementById("ip").textContent = dadosMock.ip || "-";
    document.getElementById("pais").textContent = dadosMock.country_name || "-";
    document.getElementById("regiao").textContent = dadosMock.region_name || "-";
    document.getElementById("cidade").textContent = dadosMock.city || "-";
    document.getElementById("latitude").textContent = dadosMock.latitude || "-";
    document.getElementById("longitude").textContent = dadosMock.longitude || "-";

    atualizarMapa(dadosMock.latitude, dadosMock.longitude);

    alert("Limite da API atingido, mostrando dados simulados.");
  }
}

let mapa;

function atualizarMapa(lat, lon) {
  if (!lat || !lon) {
    return;
  }

  if (!mapa) {
    mapa = L.map('map').setView([lat, lon], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapa);
  } else {
    mapa.setView([lat, lon], 13);
  }

  L.marker([lat, lon]).addTo(mapa);
}
