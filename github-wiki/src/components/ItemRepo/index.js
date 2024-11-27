import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({repository, removeRepo}) {
    function handleRemove() {
        removeRepo(repository.id)
    }
    return (
        <ItemContainer>
            <h3>{repository.name}</h3>
            <p>{repository.full_name}</p>
            <a href={repository.html_url} rel="noreferrer" target="_blank">Ver Repositorio</a>
            <a onClick={handleRemove} className="remover">Remover</a>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo