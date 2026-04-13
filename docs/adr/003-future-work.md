ADR 003: Reto 3 — Diseño de librería de plataforma

Status
Proposed

Context
Se ha desarrollado una versión base de un requerimiento, pero hay lineamientos técnicos que pueden
ser mejorables para seguir potenciando la solución.

Decision
Se lista las mejoras a futuro:
 - Agregar capa de seguridad según estándar Oauth2.0
 - Intgerar la solución con la herramienta Dynatrace para monitoreo
 - Dockerizar todos los componentes de la solución

Consequences
👍 Positivas
Mayor seguridad
Contar con observabilidad de los componentes
Mayor escalabilidad
👎 Negativas
Mayor complejidad técnica

Risks
Mala validacion de access_tokens

Assumptions
El equipo conoce del estándar OAuth2.0