INSERT INTO department (id, name)
VALUES  (1, 'ACCOUNTING'),
        (2, 'HR'),
        (3, 'SALES');


INSERT INTO role (id, title, salary, department_id)
VALUES  (1, 'SENIOR ACCOUNTANT', 100.000, 1),
        (2, 'ACCOUNTANT', 75.000, 1),
        (3, 'HR DEPARTMENT LEAD', 90.000, 2),
        (4, 'HR REPRESENTATIVE', 60.000, 2),
        (5, 'CLOSER', 125.000, 3),
        (6, 'ESTIMATOR', 50.000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1, 'Thomas', 'Mollerhoj', 5, null),
        (2, 'Robert', 'Hall', 1, null),
        (3, 'Heather', 'Star', 3, null),
        (4, 'Joseph', 'Frechette', 2, 1),
        (5, 'Jacob', 'Gonzalez', 6, 5),
        (6, 'Niko', 'Vu', 4, 3);