ADR 001: Reto 3 — Diseño de librería de plataforma

Status
Proposed

Context
En el Squad se trabaja con componentes altamente acoplados, lo que implica mucho capacity del equipo cuando se requiere
realizar modificaciones a los componentes.

Decision
Se utilizarán módulos dinámicos de NestJS para microservicioes y broker de eventos con kafka.

Consequences
👍 Positivas
Mayor escalabilidad
Componentes desacoplados
Mejor tiempo de respuesta
👎 Negativas
Mayor complejidad técnica
Necesidad de manejar reintentos

Risks
Mala configuración de Kafka
Pérdida de mensajes si no se maneja correctamente

Assumptions
El equipo puede operar Kafka

References
https://docs.nestjs.com/microservices/kafka