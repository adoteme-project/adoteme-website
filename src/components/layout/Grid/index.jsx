import Card from "@/components/common/CardAnimal";
import CardOng from "@/components/common/CardOng/index"
// import Botao from "@/components/common/Button/index"

const GridAnimais = (props) => {
  let grid = [];
  const cores = ["#FFC55E", "#A9B949", "#B2DED3", "#EC5A49"];

  if (props.tipo == "animal") {
    grid = [
      {
        key: 1,
        name: "NOHA",
        idade: "2 anos",
      },
      {
        key: 2,
        name: "PUDIM",
        idade: "2 anos",
      },
      {
        key: 3,
        name: "ALFREDO",
        idade: "2 anos",
      },
      {
        key: 4,
        name: "PAÇOCA",
        idade: "2 anos",
      },
    ];
    return (
      <>
        <section className="grid grid-cols-2 gap-10">
          {grid.map((grid, index) => (
            <Card
              key={grid.key}
              name={grid.name}
              colorBg={cores[index % cores.length]}
              descricao={props.tipo === "ong" ? props.descricao : undefined}
              endereco={props.tipo === "ong" ? props.endereco : undefined}
            />
          ))}
        </section>
      </>
    );

  } else if(props.tipo == "ong"){
    grid = [
        {
          key: "1",
          nome: "Amor Animal",
          descricao: "ONG dedicada ao resgate e adoção de animais abandonados, focando em cães e gatos em situação de risco.",
          endereco: "Rua das Flores, 123, São Paulo, SP"
        },
        {
          key: "2",
          nome: "Vida de Patas",
          descricao: "Organização sem fins lucrativos que promove o bem-estar animal e a adoção responsável de pets.",
          endereco: "Avenida Central, 456, Rio de Janeiro, RJ"
        },
        {
          key: "3",
          nome: "Lar dos Peludos",
          descricao: "Grupo de voluntários que acolhe animais de rua, oferecendo tratamento veterinário e lares temporários.",
          endereco: "Praça da Liberdade, 789, Belo Horizonte, MG"
        },
        {
          key: "4",
          nome: "Patas e Focinhos",
          descricao: "ONG voltada para o resgate de animais abandonados, com programas de adoção e conscientização sobre maus-tratos.",
          endereco: "Rua Verde, 321, Porto Alegre, RS"
        }
      ]

      return (
        <>
          <section className="grid grid-cols-2 gap-10">
            {grid.map((grid, index) => (
              <CardOng
                key={grid.key}
                name={grid.nome}
                colorBg={cores[index % cores.length]}
                descricao={grid.descricao}
                endereco={grid.endereco}
                titulo = {props.titulo}
                titulo1 = {props.titulo1}
                onDoarClick={props.onDoarClick}
              />
              
            ))}            
          </section>
        </>
      );


  }


 
};

export default GridAnimais;
