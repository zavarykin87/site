const handlers = require('../handlers')

test('home page test', () => {
    const req = {}
    const res = {render: jest.fn()}
    handlers.home(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('home')
})

test('about page with fortune test', () => {
    const req = {}
    const res = {render: jest.fn()}
    handlers.about(req, res)
    expect(res.render.mock.calls.length).toBe(1)
    expect(res.render.mock.calls[0][0]).toBe('about')
    expect(res.render.mock.calls[0][1])
        .toEqual(expect.objectContaining({fortune: expect.stringMatching(/\W/),}))
})

test('notFound page test', () => {
    const req = {}
    const res = {render: jest.fn()}
    handlers.notFound(req, res)
    expect(res.render).toHaveBeenCalledTimes(1) // вместо (res.render.mock.calls.length).toBe(1)
    expect(res.render).toHaveBeenCalledWith('404') // вместо expect(res.render.mock.calls[0][0]).toBe('404')
})

test('serverError page test', () => {
    const error = new Error('some error')
    const req = {}
    const res = {render: jest.fn()}
    const next = jest.fn();
    handlers.serverError(error, req, res, next)
    expect(res.render).toHaveBeenCalledTimes(1)
    expect(res.render).toHaveBeenCalledWith('500')
})