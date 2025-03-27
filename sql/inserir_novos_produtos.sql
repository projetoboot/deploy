-- Inserindo pratos e seus ingredientes
INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Feijoada Completa', 'Tradicional feijoada com carnes nobres, acompanha arroz, couve, farofa e laranja', 'Brasileira', 45.9, 40, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Feijoada Completa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Feijão preto', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Feijoada Completa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Carne de porco', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Feijoada Completa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Linguiça', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Feijoada Completa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Bacon', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Feijoada Completa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Couve', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Feijoada Completa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Arroz', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Feijoada Completa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Farofa', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Feijoada Completa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Laranja', true
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Picanha na Brasa', 'Suculenta picanha grelhada, acompanha arroz, feijão, vinagrete e farofa', 'Brasileira', 89.9, 35, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Picanha na Brasa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Picanha', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Picanha na Brasa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Arroz', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Picanha na Brasa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Feijão', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Picanha na Brasa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Vinagrete', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Picanha na Brasa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Farofa', true
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Moqueca de Peixe', 'Deliciosa moqueca de peixe com leite de coco, pimentões, tomate e dendê', 'Brasileira', 68.9, 45, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Moqueca de Peixe'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Peixe', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Moqueca de Peixe'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Leite de coco', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Moqueca de Peixe'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Pimentão', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Moqueca de Peixe'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Tomate', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Moqueca de Peixe'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Dendê', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Moqueca de Peixe'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Arroz', true
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('X-Tudo Especial', 'Hambúrguer artesanal, queijo, bacon, ovo, alface, tomate, cebola caramelizada e molho especial', 'Lanches', 32.9, 25, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'X-Tudo Especial'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Pão', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'X-Tudo Especial'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Hambúrguer', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'X-Tudo Especial'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Queijo', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'X-Tudo Especial'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Bacon', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'X-Tudo Especial'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Ovo', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'X-Tudo Especial'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Alface', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'X-Tudo Especial'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Tomate', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'X-Tudo Especial'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Cebola caramelizada', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'X-Tudo Especial'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Molho especial', true
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Hot Dog Completo', 'Hot dog com salsicha, purê, batata palha, vinagrete, milho, ervilha e molhos', 'Lanches', 18.9, 15, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Hot Dog Completo'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Pão', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Hot Dog Completo'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Salsicha', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Hot Dog Completo'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Purê', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Hot Dog Completo'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Batata palha', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Hot Dog Completo'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Vinagrete', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Hot Dog Completo'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Milho', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Hot Dog Completo'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Ervilha', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Hot Dog Completo'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Molho', true
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Chicken Burger', 'Hambúrguer de frango empanado, queijo, alface, tomate e maionese especial', 'Lanches', 28.9, 20, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Chicken Burger'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Pão', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Chicken Burger'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Frango empanado', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Chicken Burger'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Queijo', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Chicken Burger'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Alface', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Chicken Burger'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Tomate', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Chicken Burger'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Maionese especial', true
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Pizza Margherita', 'Molho de tomate, mussarela, tomate, manjericão e orégano', 'Pizzas', 49.9, 30, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Margherita'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Massa', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Margherita'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Molho de tomate', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Margherita'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Mussarela', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Margherita'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Tomate', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Margherita'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Manjericão', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Margherita'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Orégano', true
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Pizza 4 Queijos', 'Molho de tomate, mussarela, provolone, gorgonzola e parmesão', 'Pizzas', 55.9, 30, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza 4 Queijos'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Massa', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza 4 Queijos'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Molho de tomate', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza 4 Queijos'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Mussarela', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza 4 Queijos'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Provolone', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza 4 Queijos'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Gorgonzola', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza 4 Queijos'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Parmesão', true
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Pizza Calabresa', 'Molho de tomate, mussarela, calabresa fatiada, cebola e orégano', 'Pizzas', 45.9, 30, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Calabresa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Massa', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Calabresa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Molho de tomate', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Calabresa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Mussarela', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Calabresa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Calabresa', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Calabresa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Cebola', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Pizza Calabresa'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Orégano', true
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Combo 30 Peças', 'Mix de sushis e sashimis variados com hot roll', 'Japonesa', 89.9, 40, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Combo 30 Peças'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Sushi variado', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Combo 30 Peças'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Sashimi', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Combo 30 Peças'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Hot roll', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Combo 30 Peças'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Molho shoyu', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Combo 30 Peças'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Wasabi', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Combo 30 Peças'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Gengibre', true
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Temaki Salmão', 'Temaki de salmão com cream cheese e cebolinha', 'Japonesa', 25.9, 15, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Temaki Salmão'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Arroz', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Temaki Salmão'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Salmão', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Temaki Salmão'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Cream cheese', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Temaki Salmão'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Cebolinha', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Temaki Salmão'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Alga nori', false
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Yakisoba Tradicional', 'Macarrão oriental com legumes, frango, carne e molho especial', 'Japonesa', 35.9, 25, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Yakisoba Tradicional'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Macarrão', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Yakisoba Tradicional'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Legumes', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Yakisoba Tradicional'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Frango', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Yakisoba Tradicional'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Carne', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Yakisoba Tradicional'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Molho especial', false
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Refrigerante 2L', 'Refrigerante gelado sabores variados', 'Bebidas', 12.9, 1, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Refrigerante 2L'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Refrigerante', false
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Suco Natural', 'Suco natural de frutas da estação', 'Bebidas', 9.9, 10, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Suco Natural'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Fruta', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Suco Natural'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Água', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Suco Natural'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Açúcar', true
                    FROM prato_id;


INSERT INTO pratos (nome, descricao, categoria, preco_base, tempo_preparo, disponivel)
                    VALUES ('Milk Shake', 'Milk shake cremoso nos sabores chocolate, morango ou baunilha', 'Bebidas', 15.9, 10, true)
                    RETURNING id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Milk Shake'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Sorvete', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Milk Shake'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Leite', false
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Milk Shake'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Calda', true
                    FROM prato_id;

                    WITH prato_id AS (
                        SELECT id FROM pratos WHERE nome = 'Milk Shake'
                    )
                    INSERT INTO ingredientes (prato_id, nome, removivel)
                    SELECT id, 'Chantilly', true
                    FROM prato_id;

