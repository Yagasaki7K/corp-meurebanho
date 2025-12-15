É um aplicativo de gestão de gado.

# Tecnologias usadas

- Typescript, Nextjs, Javascript, Supabase, Styled Components, NextSEO, Sonner, UUID, next-pwa, next-seo

# Identificação de Variáveis no Banco de Dados

- ID (UUID) | _ID_ | ID do Animal
- Nome (text) | _name_ | Nome do Animal
- Nome do Pai (text) | _nameFather_ | Nome do Pai do Animal
- Nome da Mãe (text) | _nameMother_ | Nome da Mãe do Animal
- Sexo (text) | _sex_ | Sexo do Animal
- Peso (int4) | _weight_ | Peso do Animal
- Data de Nascimento (date) | _birthDate_ | Data / Mês / Ano do Nascimento do Animal
- Registro RGN (text) | _RGN_ | Número de Identificação
- Tipo (text) | _type_ | Se o animal é gado, bezerro, embrião, aspiração, falecido
- Raça (text) | _race_ | A nomenclatura do animal e sua pureza
- Troféu (bool) | _trophy_ | É um troféu ou não? Animal Destaque com base no valor
- DECA (int2) | _DECA_ | Número da qualidade do Animal (1-10)
- Leilão (text) | _auction_ | Nome do leilão onde o Animal foi obtido
- Imagem (text) | _image_ | URL da imagem do Animal
- Video (text) | _video_ | URL/ID do vídeo do Animal
- Investido (int8) | _investment_ | Valor Investido na venda do animal
- Recebido (int8) | _received_ | Valor recebido de lucro referente ao animal
- Condominio (JSON) | _condo_ | Membros e valores investidos na aquisição
- Geração (JSON) | _generation_ | Gerações de Bezerros/Embriões/Aspiração
- Prêmios (JSON) | _achivements_ | Prêmios que o animal adquiriu durante a vida

# Futuras funcionalides

- Sistema de registro de vacinas
- Sistema de localização de gado
- Sistema de documentos do gado - de fácil acesso
- Sistema de notificação de datas de leilão (Não usar push notification - Usar notificação dentro do aplicativo como mensagem não lida)
