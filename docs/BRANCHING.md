# LibFlow para aplicaciones React

Flujo recomendado para trabajar con este template:

- `main`: rama estable (lo que está desplegado en producción)
- `develop`: rama de integración
- `feature/*`: nuevas features o mejoras
- `fix/*`: bugfixes
- `release/*`: preparación de releases

Flujo típico:

1. Crear rama de feature desde `develop`:
   ```bash
   git checkout -b feature/nueva-feature
   ```

2. Abrir PR contra `develop`.

3. Una vez mergeado y estable, preparar release:
   ```bash
   git checkout -b release/1.1.0
   npm run release:patch # o :minor / :major
   ```

4. Merge de `release/*` a `main` y tag automático (standard-version).

5. Desplegar la imagen Docker de la versión taggeada en el entorno que corresponda.
