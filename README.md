```bash
git init
git remote add origin git@github.com:odocente/lab-gh-actions.git
git add .
git commit -m "initial commit"
git push -u origin main

npm install gh-pages --save-dev
```

- Modificamos `package.json` con: 

```json
"build:prod": "npm run clean && webpack --config ./config/webpack/prod.js",
"deploy": "gh-pages -d dist"
```

- Lanzamos: 

```bash
npm install
npm run build
npm run build:dev
npm run deploy
```

- Comprobamos resultado: 

	- https://github.com/odocente/lab-gh-actions

	- https://odocente.github.io/lab-gh-actions

- Para automatizar con Github Actions: 

```bash
# creamos cd.yml
micro .github/workflows/cd.yml
```

- `cd.yml`

```yml
name: Continuos Deployment workflow

on:
  push:
    branches:

   - main

jobs:
  cd:
    runs-on: ubuntu-latest
    steps:

   - name: Checkout repository
	uses: actions/checkout@v3
	   - name: Install
		run: npm ci
		   - name: Build
			run: npm run build
			   - name: Deploy
				run: npm run deploy
```

- Como falla o *deployment* debemos configurar acceso a repositorio por SSH na máquina virtual: 

```bash
ssh-keygen -m PEM -t rsa -C "cd-user@minha-app.com"
```

- Configuramos a clave pública e privada nos settings correspondentes do repositorio en Github

- Editamos `cd.yml`:

```yml
name: Continuos Deployment workflow

on:
  push:
    branches:
      - main

jobs:
  cd:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Use SSH key
        run: |
         mkdir -p ~/.ssh/
         echo "${{secrets.SSH_PRIVATE_KEY}}" > ~/.ssh/id_rsa
         sudo chmod 600 ~/.ssh/id_rsa
      - name: Git config
        run: |
         git config --global user.email "cd-user@minha-app.com"
         git config --global user.name "cd-user"

      - name: Install
        run: npm ci
      - name: Build
        run: npm run build
      - name: Deploy
        run: npm run deploy -- -r git@github.com:odocente/lab-gh-actions.git
```

- Subimos cambios: 

```bash
git add .
git commit -m "configure git cd-user permits"
git push
```

- Verificamos: 

	- https://github.com/odocente/lab-gh-actions

	- https://odocente.github.io/lab-gh-actions
