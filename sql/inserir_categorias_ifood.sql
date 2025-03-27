-- Inserir categorias padrão do iFood
INSERT INTO categorias (nome, descricao, ordem) VALUES
('Lanches', 'Hambúrgueres, hot dogs e outros lanches', 1),
('Pizzas', 'Pizzas tradicionais e especiais', 2),
('Brasileira', 'Pratos típicos da culinária brasileira', 3),
('Japonesa', 'Sushi, sashimi e pratos japoneses', 4),
('Italiana', 'Massas, lasanhas e pratos italianos', 5),
('Sobremesas', 'Doces, bolos e sobremesas', 6),
('Bebidas', 'Refrigerantes, sucos e bebidas alcoólicas', 7),
('Vegetariana', 'Opções vegetarianas e veganas', 8),
('Árabe', 'Esfihas, quibes e comida árabe', 9),
('Açaí', 'Açaí, smoothies e frozen', 10),
('Marmitas', 'Refeições prontas e marmitas', 11),
('Saudável', 'Opções fit e saudáveis', 12),
('Chinesa', 'Pratos da culinária chinesa', 13),
('Padaria', 'Pães, bolos e produtos de padaria', 14),
('Pastel', 'Pastéis diversos', 15),
('Sorvetes', 'Sorvetes e gelatos', 16),
('Espetinhos', 'Churrasquinho e espetinhos', 17),
('Mexicana', 'Tacos, burritos e comida mexicana', 18)
ON CONFLICT (nome) DO NOTHING;