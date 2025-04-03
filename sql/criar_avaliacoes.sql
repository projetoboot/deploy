CREATE TABLE IF NOT EXISTS avaliacoes (
    id SERIAL PRIMARY KEY,
    produto_id INTEGER NOT NULL,
    rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
    data_avaliacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (produto_id) REFERENCES pratos(id) ON DELETE CASCADE
);

-- Função para calcular a média de avaliações de um produto
CREATE OR REPLACE FUNCTION calcular_media_avaliacoes(p_produto_id INTEGER)
RETURNS NUMERIC AS $$
BEGIN
    RETURN COALESCE(
        (SELECT AVG(rating)::NUMERIC(10,1)
         FROM avaliacoes
         WHERE produto_id = p_produto_id),
        0.0
    );
END;
$$ LANGUAGE plpgsql;

-- Função para contar o número de avaliações de um produto
CREATE OR REPLACE FUNCTION contar_avaliacoes(p_produto_id INTEGER)
RETURNS INTEGER AS $$
BEGIN
    RETURN COALESCE(
        (SELECT COUNT(*)
         FROM avaliacoes
         WHERE produto_id = p_produto_id),
        0
    );
END;
$$ LANGUAGE plpgsql;