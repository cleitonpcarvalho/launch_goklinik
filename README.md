# GoKlinik Launch Landing

Fundacao tecnica da landing page de lancamento do GoKlinik Patient.

## Comandos

Servidor local:

```bash
npm run dev
```

Build de producao:

```bash
npm run build
```

Lint e formatacao:

```bash
npm run lint
npm run format:check
```

## Docker

Desenvolvimento com hot reload:

```bash
docker compose up --build web
```

Producao:

```bash
docker compose --profile prod up --build web-prod
```

Rotas principais:

```text
/tr
/pt
/en
```
