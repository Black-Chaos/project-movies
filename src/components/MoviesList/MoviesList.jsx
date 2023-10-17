import { List } from "./MoviesList.styled";
import { MoviesListItem } from "./MoviesListItem";

export function MoviesList({data}) {
    return <>
        <List>
            {data.map(item => <MoviesListItem key={`${item.id}${item.title}`} data={item} />)}
        </List>
    </>
}