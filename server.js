const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const admin = require("firebase-admin");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

<<<<<<< HEAD
// Usar /tmp en producción (Render) o data/ en desarrollo
const FRASES_FILE =
	process.env.NODE_ENV === "production"
		? "/tmp/frases.json"
		: path.join(__dirname, "data", "frases.json");

// Asegurarse de que el archivo y el directorio existan
async function initializeStorage() {
	try {
		if (process.env.NODE_ENV === "production") {
			// En producción, solo necesitamos crear el archivo en /tmp
			await fs.writeFile(FRASES_FILE, JSON.stringify({ frases: [] }), "utf8");
		} else {
			// En desarrollo, asegurarse de que exista el directorio data/
			const dataDir = path.join(__dirname, "data");
			try {
				await fs.access(dataDir);
			} catch {
				await fs.mkdir(dataDir);
			}
			// Crear el archivo si no existe
			try {
				await fs.access(FRASES_FILE);
			} catch {
				await fs.writeFile(FRASES_FILE, JSON.stringify({ frases: [] }), "utf8");
			}
		}
		console.log("Almacenamiento inicializado correctamente");
	} catch (error) {
		console.error("Error al inicializar el almacenamiento:", error);
	}
}

// Inicializar almacenamiento al arrancar
initializeStorage();
=======
// Configuración de Firebase Admin
const serviceAccount = {
	type: "service_account",
	project_id: "siempre-me-gustaron",
	private_key_id: "54729390a188028367f740b197d1fe32a191fe82",
	private_key:
		"-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDlsKDny3UROaMS\nUUBl/0VBxiatfvCMDnAs1RG6eUp2G5a/QEGa2oCn65glkgtgz6dzGNO9ko9xFp/m\nI3ZiEWeBcCH+lufcmkmRIw/NqJ+MHA1zXr+/VgcuE1lbwY6RDAys0YPR1Z/RbaPG\nFExQ60oElI8xXgIlKQKugrdXDFA4rauHNxH9BEeH2ak8mlumXK94NvlvlB8Kk9IJ\nePbGay+BDIfknHazqW85L2S5H/KW/YogQSEE0aMzlQm2X8mNwTnV/uiYxmF1hg0l\nXoC6U+/7kwaHb493onMk7DPlZ27eVtoZQ1OKRv4Y0FN++MvFeEh7afdsv9Aog11t\nTHs1zmydAgMBAAECggEADHI6Ad13Qj/wi3NOLUi8GMCTQ3b7s2cr4m4ISCW+6G/9\nxu7FL040RwUf6TdE+RG/hd/cR2s77RmYAAk/ZriBNpUcLnbAaSaOInh3KIKA5L93\nZh9F/ij7+h3vy2ZNYqQ3wpyWy0XLY3aQt5DNgtwBFobzTG5G6PsUK18nbqba6Ps7\n5mbmLepFleZxNoQ6DH/OmAusRSLueAJL0Hkah0GgKHxIIvZVbeuAgBHRU8MPzarD\nKGzsDHgxUcFCiNt1JUilOIqLJr8PmrW3HhOJSR9Z5TAs/NidUL28sos/mqB+WjEB\nJ6bykbFKhb41fSCDn+rXLM9RGErrlHcNqpI8ukv3qQKBgQD1QP2qxChgOaNa1Kq0\n8zHVV50b7oAbsH+gl6a9yWgmEp9EEHvXEmghGbzJe3OFEzr5K7m+Oe6WyNXRKjXd\nhLQxZ5KYK3iUZXwpC6X0bE2l1pKED0efZK4S72RekPNM0hKlxqU6+YMfyM2+q5zG\nPG8KZdILd1rHuJRtRCNrkZScqQKBgQDvwQ60InYdwUwomWRyJmQsOjV2ACdOj6y5\nfW7i30PHA082uij+VZYfIoGpfY0HcMvcLsmi0Fkf652EaTO1KNakintnDzuS3mIs\noqO+KOPGzHSlymHZKSK7fMZXIc4nTAUaYMZ8JNxKXnJod7x+CL3CrZcQQ8ChCUoZ\n31Bc+H/01QKBgQCyK7vdYlIezeDB7PvzJzZN0i+eCh9hflDJ30JQYFBcUG0J6pu9\nPG8PlP4Uta3PwI+4Uy7GZpnRSygio3Kscmrh9WeHSxV3YV7ZBtBSiJfEYeThMaSL\nxH293dJh7RYD+h13958z/+5lmeD2ov/q+B6HRD9a+yOlMpAJ7VV6ITIAuQKBgFIT\n4ZjBg3ZESnJLsRtzETAi7VJsUwiOHy+RRXjdvjJPa7rsmEQZwL7/7Su9E57Mer3y\nNo1KjnhjDRXbfhwy0uiZkA2EJXzuLOXi9/ONxAy2yehIFJ9necB9wtjpdc32NHkH\nUGwHonLDSp+A/kKXc39GNkUXLMb0iy24SabKW+PRAoGAXBVWUCeSHvpVEux6wIXH\nQkKQomFcdnv1Gxz53cfTGtMbW6U5yDkR09oTCwwaGni4Os6x10fFQUxnVnIqkjTW\n4F8Bp2tVxmTkPRg7X8tB4UH5IuMqFdDMNe3Ht4WFtqo1EhjXMpHttiD4iffcC5eq\ngsuY42ZySdTxJreIyCYerAs=\n-----END PRIVATE KEY-----\n",
	client_email:
		"firebase-adminsdk-fbsvc@siempre-me-gustaron.iam.gserviceaccount.com",
	client_id: "102550021122966038688",
	auth_uri: "https://accounts.google.com/o/oauth2/auth",
	token_uri: "https://oauth2.googleapis.com/token",
	auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
	client_x509_cert_url:
		"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40siempre-me-gustaron.iam.gserviceaccount.com",
	universe_domain: "googleapis.com",
};

// Inicializar Firebase Admin
admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	storageBucket: "siempre-me-gustaron.firebasestorage.app",
});

const db = admin.firestore();
const frasesCollection = db.collection("frases");
>>>>>>> local-working-ok

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Funciones auxiliares para manejar Firestore
async function readFrases() {
	try {
		const snapshot = await frasesCollection.orderBy("timestamp", "desc").get();
		const frases = [];
		snapshot.forEach((doc) => {
			frases.push({
				id: doc.id,
				...doc.data(),
				timestamp: doc.data().timestamp.toDate().toISOString(),
			});
		});
		return { frases };
	} catch (error) {
		console.error("Error al leer frases:", error);
		return { frases: [] };
	}
}

// Ruta principal - Formulario de entrada
app.get("/", (req, res) => {
	const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>¿Por qué te gustan las fiestas?</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        body {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 20px;
        }
        
        .container {
          max-width: 600px;
          width: 100%;
          background: white;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
        
        h1 {
          color: #2d3748;
          margin-bottom: 30px;
          font-size: 2rem;
          text-align: center;
        }
        
        form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        textarea {
          width: 100%;
          min-height: 120px;
          padding: 15px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          resize: vertical;
          transition: border-color 0.3s ease;
        }
        
        textarea:focus {
          outline: none;
          border-color: #4299e1;
        }
        
        button {
          background: #4299e1;
          color: white;
          border: none;
          padding: 15px 30px;
          border-radius: 8px;
          font-size: 1rem;
          cursor: pointer;
          transition: transform 0.2s ease, background-color 0.2s ease;
        }
        
        button:hover {
          background: #3182ce;
          transform: translateY(-2px);
        }
        
        .message {
          padding: 15px;
          border-radius: 8px;
          text-align: center;
          display: none;
        }
        
        .success {
          background: #c6f6d5;
          color: #2f855a;
        }
        
        .error {
          background: #fed7d7;
          color: #c53030;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>¿Por qué te gustan las fiestas?</h1>
        <form id="fraseForm">
          <textarea 
            name="texto" 
            placeholder="Comparte tu razón..."
            required
            minlength="10"
            maxlength="500"
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
        <div id="message" class="message"></div>
      </div>
      
      <script>
        const form = document.getElementById('fraseForm');
        const messageDiv = document.getElementById('message');
        
        form.addEventListener('submit', async (e) => {
          e.preventDefault();
          
          const formData = new FormData(form);
          const texto = formData.get('texto');
          
          try {
            const response = await fetch('/frase', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ texto }),
            });
            
            if (response.ok) {
              messageDiv.textContent = '¡Gracias por compartir!';
              messageDiv.className = 'message success';
              messageDiv.style.display = 'block';
              form.reset();
              
              setTimeout(() => {
                messageDiv.style.display = 'none';
              }, 3000);
            } else {
              throw new Error('Error al enviar');
            }
          } catch (error) {
            messageDiv.textContent = 'Hubo un error al enviar tu frase. Por favor, intenta de nuevo.';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
          }
        });
      </script>
    </body>
    </html>
  `;
	res.send(html);
});

// Ruta de visualización en tiempo real
app.get("/live", (req, res) => {
	const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Frases en Vivo</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        body {
          min-height: 100vh;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
          padding: 40px 20px;
        }
        
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        h1 {
          color: #2d3748;
          margin-bottom: 40px;
          text-align: center;
          font-size: 2.5rem;
        }
        
        #frases-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        
        .frase-card {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          opacity: 0;
          animation: fadeIn 0.5s ease forwards;
        }
        
        .frase-card:hover {
          transform: translateY(-5px);
        }
        
        .frase-texto {
          color: #2d3748;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .frase-fecha {
          color: #718096;
          font-size: 0.9rem;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        #contador {
          text-align: center;
          margin-bottom: 30px;
          color: #4a5568;
          font-size: 1.2rem;
        }
      </style>
      <script src="/socket.io/socket.io.js"></script>
    </head>
    <body>
      <div class="container">
        <h1>Frases en Vivo</h1>
        <div id="contador">Cargando frases...</div>
        <div id="frases-container"></div>
      </div>
      
      <script>
        const socket = io();
        const frasesContainer = document.getElementById('frases-container');
        const contadorDiv = document.getElementById('contador');
        
        function formatDate(dateString) {
          return new Date(dateString).toLocaleString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
        }
        
        function createFraseCard(frase) {
          const card = document.createElement('div');
          card.className = 'frase-card';
          card.innerHTML = \`
            <p class="frase-texto">\${frase.texto}</p>
            <p class="frase-fecha">\${formatDate(frase.timestamp)}</p>
          \`;
          return card;
        }
        
        function updateContador(count) {
          contadorDiv.textContent = \`Total de frases: \${count}\`;
        }
        
        // Cargar frases iniciales
        fetch('/frases')
          .then(response => response.json())
          .then(data => {
            data.frases.forEach(frase => {
              frasesContainer.appendChild(createFraseCard(frase));
            });
            updateContador(data.frases.length);
          });
        
        // Escuchar nuevas frases
        socket.on('nueva_frase', (frase) => {
          const card = createFraseCard(frase);
          frasesContainer.insertBefore(card, frasesContainer.firstChild);
          updateContador(frasesContainer.children.length);
        });
      </script>
    </body>
    </html>
  `;
	res.send(html);
});

// Ruta de administración
app.get("/admin", (req, res) => {
	const html = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Administración de Frases</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        body {
          background: #f7fafc;
          padding: 40px 20px;
        }
        
        .container {
          max-width: 1000px;
          margin: 0 auto;
        }
        
        h1 {
          color: #2d3748;
          margin-bottom: 30px;
        }
        
        .frase-item {
          background: white;
          padding: 20px;
          margin-bottom: 15px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .frase-texto {
          margin-bottom: 15px;
        }
        
        .frase-texto textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 1rem;
          margin-top: 5px;
        }
        
        .frase-fecha {
          color: #718096;
          font-size: 0.9rem;
          margin-bottom: 15px;
        }
        
        .frase-acciones {
          display: flex;
          gap: 10px;
        }
        
        button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.2s ease;
        }
        
        .btn-guardar {
          background: #48bb78;
          color: white;
        }
        
        .btn-guardar:hover {
          background: #38a169;
        }
        
        .btn-eliminar {
          background: #f56565;
          color: white;
        }
        
        .btn-eliminar:hover {
          background: #e53e3e;
        }
        
        .message {
          padding: 10px;
          margin-bottom: 20px;
          border-radius: 4px;
        }
        
        .success {
          background: #c6f6d5;
          color: #2f855a;
        }
        
        .error {
          background: #fed7d7;
          color: #c53030;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Administración de Frases</h1>
        <div id="message" style="display: none;" class="message"></div>
        <div id="frases-container"></div>
      </div>
      
      <script>
        const frasesContainer = document.getElementById('frases-container');
        const messageDiv = document.getElementById('message');
        
        function showMessage(text, type) {
          messageDiv.textContent = text;
          messageDiv.className = \`message \${type}\`;
          messageDiv.style.display = 'block';
          setTimeout(() => {
            messageDiv.style.display = 'none';
          }, 3000);
        }
        
        function formatDate(dateString) {
          return new Date(dateString).toLocaleString('es-ES', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });
        }
        
        function createFraseElement(frase) {
          const div = document.createElement('div');
          div.className = 'frase-item';
          div.innerHTML = \`
            <div class="frase-texto">
              <textarea rows="3">\${frase.texto}</textarea>
            </div>
            <div class="frase-fecha">\${formatDate(frase.timestamp)}</div>
            <div class="frase-acciones">
              <button class="btn-guardar" onclick="guardarFrase('\${frase.id}', this)">Guardar</button>
              <button class="btn-eliminar" onclick="eliminarFrase('\${frase.id}', this)">Eliminar</button>
            </div>
          \`;
          return div;
        }
        
        async function cargarFrases() {
          try {
            const response = await fetch('/frases');
            const data = await response.json();
            frasesContainer.innerHTML = '';
            data.frases.forEach(frase => {
              frasesContainer.appendChild(createFraseElement(frase));
            });
          } catch (error) {
            showMessage('Error al cargar las frases', 'error');
          }
        }
        
        async function guardarFrase(id, button) {
          const fraseItem = button.closest('.frase-item');
          const texto = fraseItem.querySelector('textarea').value;
          
          try {
            const response = await fetch(\`/frase/\${id}\`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ texto }),
            });
            
            if (response.ok) {
              showMessage('Frase actualizada correctamente', 'success');
            } else {
              throw new Error('Error al actualizar');
            }
          } catch (error) {
            showMessage('Error al guardar la frase', 'error');
          }
        }
        
        async function eliminarFrase(id, button) {
          if (!confirm('¿Estás seguro de que quieres eliminar esta frase?')) {
            return;
          }
          
          try {
            const response = await fetch(\`/frase/\${id}\`, {
              method: 'DELETE',
            });
            
            if (response.ok) {
              const fraseItem = button.closest('.frase-item');
              fraseItem.remove();
              showMessage('Frase eliminada correctamente', 'success');
            } else {
              throw new Error('Error al eliminar');
            }
          } catch (error) {
            showMessage('Error al eliminar la frase', 'error');
          }
        }
        
        // Cargar frases al iniciar
        cargarFrases();
      </script>
    </body>
    </html>
  `;
	res.send(html);
});

// API Endpoints
app.get("/frases", async (req, res) => {
	try {
		const data = await readFrases();
		res.json(data);
	} catch (error) {
		console.error("Error al leer frases:", error);
		res.status(500).json({ error: "Error al leer las frases" });
	}
});

app.post("/frase", async (req, res) => {
	try {
		const { texto } = req.body;

		if (!texto || texto.length < 10 || texto.length > 500) {
			return res.status(400).json({ error: "Texto inválido" });
		}

		const nuevaFrase = {
			texto,
			timestamp: admin.firestore.Timestamp.now(),
		};

		const docRef = await frasesCollection.add(nuevaFrase);
		const fraseCompleta = {
			id: docRef.id,
			...nuevaFrase,
			timestamp: nuevaFrase.timestamp.toDate().toISOString(),
		};

		io.emit("nueva_frase", fraseCompleta);
		res.status(201).json(fraseCompleta);
	} catch (error) {
		console.error("Error al guardar frase:", error);
		res.status(500).json({ error: "Error al guardar la frase" });
	}
});

app.put("/frase/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const { texto } = req.body;

		if (!texto || texto.length < 10 || texto.length > 500) {
			return res.status(400).json({ error: "Texto inválido" });
		}

		const fraseRef = frasesCollection.doc(id);
		const doc = await fraseRef.get();

		if (!doc.exists) {
			return res.status(404).json({ error: "Frase no encontrada" });
		}

		await fraseRef.update({ texto });

		const updatedDoc = await fraseRef.get();
		const fraseActualizada = {
			id: updatedDoc.id,
			...updatedDoc.data(),
			timestamp: updatedDoc.data().timestamp.toDate().toISOString(),
		};

		res.json(fraseActualizada);
	} catch (error) {
		console.error("Error al actualizar frase:", error);
		res.status(500).json({ error: "Error al actualizar la frase" });
	}
});

app.delete("/frase/:id", async (req, res) => {
	try {
		const { id } = req.params;
		const fraseRef = frasesCollection.doc(id);
		const doc = await fraseRef.get();

		if (!doc.exists) {
			return res.status(404).json({ error: "Frase no encontrada" });
		}

		await fraseRef.delete();
		res.status(204).send();
	} catch (error) {
		console.error("Error al eliminar frase:", error);
		res.status(500).json({ error: "Error al eliminar la frase" });
	}
});

// Iniciar el servidor
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
