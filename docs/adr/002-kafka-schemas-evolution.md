ADR 002: Reto 3 — Diseño de librería de plataforma

Status
Proposed

Context
El Squad recibe contantemente requerimientos para actualizar sus componentes. Esto conlleva en algunos casos a modificar 
la estructura de los mensajes en el broker.

Decision
Se usará Confluent Schema Registry para definir esquimir esquemas de compatibilidad.

Consequences
👍 Positivas
Mayor estabilidad operativa
👎 Negativas
Mayor complejidad técnica

Risks
Mala gestión del Confluente Schema Registry

Assumptions
El equipo conoce Confluent Schema Registry

References
https://docs.confluent.io/platform/current/schema-registry/index.html