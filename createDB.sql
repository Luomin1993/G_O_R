CREATE TABLE ElectromagneticPart(
   ID INT PRIMARY KEY     NOT NULL,
   NAME           TEXT    NOT NULL,
   para1          REAL,
   para2          REAL,
   para3          REAL,
   para4          REAL,
   para5          REAL,
   para6          REAL,
   para7          REAL
);


INSERT INTO ElectromagneticPart (ID ,NAME ,para1,para2,para3,para4,para5,para6,para7)  
VALUES (11, 'Evol', 100.0, 30.0, 1.72 , 12.0, 0.0, 0.0, 0.0);
/*                    B     E      e       b*/

INSERT INTO ElectromagneticPart (ID ,NAME ,para1,para2,para3,para4,para5,para6,para7)  
VALUES (12, 'Ivol',   0.8,  0.0,   0.0,  0.0, 0.0, 0.0, 0.0);
/*                     tp's  */

INSERT INTO ElectromagneticPart (ID ,NAME ,para1,para2,para3,para4,para5,para6,para7)  
VALUES (13, 'Vvol',    20,  0.5,   0.0,  0.0, 0.0, 0.0, 0.0);
/*                      Va   omiga*/

/*drop table tablename*/