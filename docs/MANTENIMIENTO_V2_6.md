# Mantenimiento v2.6 — Pensamiento Matemático II

## Cambios
1. El portal recupera el avance digital de los 14 módulos; 75 puntos por módulo, 1050 máximo.
2. Resume actividades marcadas del cuaderno, sin conceder puntos institucionales: hasta 25 potenciales por módulo, 350 máximos.
3. El ejemplo de cuaderno de portada permanece como demostración independiente, no suma puntos.
4. Se añade documentación a progresiones 1 y 2.
5. Programación lineal distingue objetivo no acotado y región no acotada con objetivo finito por coeficiente cero; detecta objetivo constante.
6. Se conserva almacenamiento local histórico y sin cuentas, para no perder progreso de estudiantes.

## Limitaciones y próximos pasos
- LocalStorage no identifica estudiantes ni certifica evidencias.
- Revisar el funcionamiento del sitio publicado y accesibilidad con dispositivos reales.
- En programación lineal, los modelos didácticos usan tres restricciones con coeficientes y términos no negativos y no representan programación lineal general ni variables enteras.
- El optimizador del laboratorio trabaja con variables reales y restricciones `<=`; si se requieren cantidades indivisibles, emplear programación entera.
