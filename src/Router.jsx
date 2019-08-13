import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import Home from 'Pages/Home'

const GRAPHCMS_API = 'https://api-euwest.graphcms.com/v1/cjza192240e9p01dj0bo5dabk/master'

const client = new ApolloClient({
    link: new HttpLink({
        uri: GRAPHCMS_API,
        credentials: 'same-origin',
        headers: {
            authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiOWI4ODRlYTYtOGYzYy00ZmE4LTk3ZWUtYzdiZjBlYTc0ZjE4In0.WLWROg2UJNtHzziWF51h4wJcZ4FAJKQYi5nWX8c2GBA'
        }
    }),
    cache: new InMemoryCache,
});

export default function() {
    return (
        <ApolloProvider client={ client }>
            <BrowserRouter>
                <Switch>
                    <Route exact path="*" component={Home} />
                </Switch>
            </BrowserRouter>
        </ApolloProvider>
    )
}
