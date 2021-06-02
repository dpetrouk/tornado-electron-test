import tornado.ioloop
import tornado.web
import os

class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")

class DataHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, another world")

def make_app():
    data_path = os.path.join(os.path.dirname(__file__), 'data')
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/data", DataHandler),
        (r"/data/(.*)", tornado.web.StaticFileHandler, {"path": data_path}),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()