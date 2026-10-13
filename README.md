# Pensamiento Matemático II — Universidad William Osler

Portal educativo interactivo para bachillerato, coordinado académicamente por **L.I. Luis Arturo López Vergara** (Zihuatanejo, Guerrero).

## Versión
**v1.0 — Portal principal**. Incluye identidad institucional, tarjetas y búsqueda de las 14 progresiones, componente demostrativo de cuaderno y esquema de seguimiento. **Las lecciones aún no están publicadas**.

## Publicación en GitHub Pages

1. Crear un repositorio público llamado `pensamiento_matematico_II`.
2. Subir **el contenido de esta carpeta** a la raíz del repositorio (no una carpeta adicional que la contenga).
3. En GitHub, entrar a **Settings → Pages → Build and deployment → Deploy from a branch**.
4. Seleccionar la rama `main` y la carpeta `/(root)`. Guardar.
5. Abrir `https://luislopezv71-sudo.github.io/pensamiento_matematico_II/` después de que GitHub confirme el despliegue.

## Estructura
- `index.html`: portada.
- `assets/css/estilos.css`: diseño adaptable.
- `assets/js/data.js`: catálogo de las 14 progresiones y estados de publicación.
- `assets/js/app.js`: búsqueda, tarjetas y demostración del cuaderno.
- `docs/`: notas curriculares y criterios de evaluación.

## Añadir un módulo
1. Crear la carpeta indicada por su `slug` en `assets/js/data.js`.
2. Crear en ella un `index.html` con teoría, ejemplos, simulación, práctica, cuaderno y retos.
3. Probar los enlaces relativos y el funcionamiento móvil.
4. Cambiar el campo `estado` del módulo de `planeado` a `disponible` **únicamente cuando su archivo esté publicado**.

## Evaluación de referencia por módulo
- Comprensión: 20 puntos.
- Ejercicios interactivos: 30 puntos.
- Cuaderno: 25 puntos (**requiere revisión del docente**).
- Reto: 15 puntos.
- Explicación/comprobación: 10 puntos.

**Importante:** los controles de cuaderno de la portada son demostrativos; marcar actividades no acredita puntos. GitHub Pages y el almacenamiento local no son un sistema institucional de calificaciones ni verifican evidencias.

## Referencia curricular
[SEP-DGB: Programa de estudios Pensamiento Matemático II (edición 2023)](https://dgb.sep.gob.mx/storage/recursos/2025/09/HFhKDCTZRZ-Pensamiento-Matematico-II.pdf). Se incluyen 14 progresiones y se usan títulos breves adaptados para la navegación, no citas textuales oficiales.
