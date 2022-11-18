import axios from "axios";
import users from "@/api/users";

export default {
    namespaced: true,
    state: {
        users: [],
        filters: [
            {
                type: 'country',
                items: [
                    {
                        text: 'Canada',
                        value: 'Canada'
                    },
                    {
                        text: 'United Kingdom',
                        value: 'United Kingdom'
                    },
                    {
                        text: 'USA',
                        value: 'USA'
                    }
                ],
            },
            {
                type: 'score',
                items: [
                    {
                        text: '< 10',
                        value: 10,
                        operator: '<'
                    },
                    {
                        text: '> 20',
                        value: 20,
                        operator: '>'
                    }
                ]
            }
        ],
        selectedFilters: {
            score: {
                filter: null
            },
            country: {
                filter: null
            }
        }

    },
    mutations: {
        setUsers(state, users) {
            state.users = users
        },

        setFilters(state, payload) {
            state.selectedFilters[payload.type].filter = payload.value
        },
        applyFilter(state) {
            state.users = users.filter(user => {
                let countryFilter = !state.selectedFilters.country.filter || user.address.country === state.selectedFilters.country.filter.value
                let scoreFilter = null
                if(!state.selectedFilters.score.filter) {
                    scoreFilter = true
                    return countryFilter && scoreFilter
                }
                switch (state.selectedFilters.score.filter.operator) {
                    case '<':
                        scoreFilter = user.score < state.selectedFilters.score.filter.value
                        break;
                    case  '>':
                        scoreFilter = user.score > state.selectedFilters.score.filter.value
                        break;
                }
                return countryFilter && scoreFilter

            })
        }
    },
    actions: {
        getUsersData(ctx) {
            let usersData = [...users]
            const url = 'https://foo.com/users'
            axios({
                method: "GET",
                url: url
            })
                .then(response => {
                    usersData = [...response.data]
                    ctx.commit('setUsers', usersData)
                })
                .catch(err => {
                    console.log(err)
                    ctx.commit('setUsers', usersData)
                })
        }
    },
    getters: {
        getUsers(state) {
            return state.users
        },
        getFilters(state) {
            return state.filters
        }
    }
}