import React, {Component} from "react"
import Main from "../templates/Main"
import axios from "axios"

const headerProps = {
    icone: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: {nome: '', email: ''},
    list: [],
}

export default class UserCrud extends Component {
    state = {...initialState}

    clear() {
        this.setState({user: initialState.user})
    }
    
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'

        const url = user.id ? `${baseUrl}/${user.id}` : `${baseUrl}`
        axios[method](url, user).then(resp => {
            const list = this.getUpdatedList(resp.data)

            this.setState({user: initialState.user, list: list})
        })
    }

    getUpdatedList (user, add=true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(add) list.unshift(user)
        return list
    }

    updateField(event) {
        const user = {...this.state.user}

        user[event.target.name] = event.target.value
        this.setState({user})
    }

    load(user) {
        this.setState(user)
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })

    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome:</label>
                            <input type="text" className="form-control" name="nome" 
                                value={this.state.user.nome} 
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..."/>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label>E-mail:</label>
                                <input type="text" className="form-control" name="email" 
                                    value={this.state.user.email} 
                                   onChange={e => this.updateField(e)}
                                    placeholder="Digite o e-mail..."/>
                            </div>
                        </div>
                    </div>
                </div>
                
                <hr />
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end">
                            <button className="btn btn-primary"
                                onClick={e => this.save(e)}>
                                Salvar
                            </button>
                            <button className="btn btn-secondary mx-2" 
                                onClick={e => this.clear(e)}>
                                Cancelar
                            </button>
                        </div>
                    </div>
            </div>
        )
    }

    renderRowns() {
        console.log(this.state.list)
        return this.state.list.map( (user) => (
            <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nome}</td>
                <td>{user.emal}</td>
                <td>
                    <button className="btn btn-warning" onClick={e => this.load(e)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger mx-2" onClick={e => this.remove(e)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Nome</td>
                    <td>Email</td>
                    <td>Ações</td>
                </tr>
                </thead>
                <tbody>
                    {this.renderRowns()}
                </tbody>
            </table>
        )
    }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )   
    }
}