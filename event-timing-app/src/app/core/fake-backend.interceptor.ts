import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../shared/models/user.model';
import { mergeMap, materialize, dematerialize, delay } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const users: User[] = [{
            id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User'
        }];


        const authHeader = request.headers.get('Authorization');
        const isLoggedIn = authHeader && authHeader.startsWith('Bearer fake-jwt-token');

        return of(null).pipe(mergeMap(() => {

            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                const user = users.find(x => x.username === request.body.username && x.password === request.body.password);
                if (!user) {
                    return throwError({ status: 400, error: 'Username or password is incorrect' });
                }

                return of(new HttpResponse({
                    status: 200, body: {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    }
                }));


            }

            if (request.url.endsWith('/users') && request.method === 'GET') {
                if (!isLoggedIn) {
                    return throwError({
                        status: 401, error: {
                            message: 'Unauthorized'
                        }
                    });
                }
                return of(new HttpResponse({
                    status: 200, body: users
                }));
            }

            return next.handle(request);

        }))
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize())
        ;



    }
    // tslint:disable-next-line:eofline
}

export let fakeBackendProvider = {
    provide: HTTP_INTERCEPTORS,
    userClass: FakeBackendInterceptor,
    multi: true
};
