import { graphql, useStaticQuery } from 'gatsby';

const useHabitaciones = () => {
  
  const data = useStaticQuery(graphql`
    query {
      allDatoCmsHabitacion {
          nodes {
            id
            titulo
            slug
            contenido
            imagen { 
              gatsbyImageData
            }
          }
      }  
    }
  `);

  return data.allDatoCmsHabitacion.nodes.map(habitacion => ({
      titulo: habitacion.titulo,
      id: habitacion.id,
      contenido: habitacion.contenido,
      imagen: habitacion.imagen,
      slug: habitacion.slug
  }))
  
}

export default useHabitaciones;