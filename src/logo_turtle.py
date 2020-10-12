import turtle
 
colors = [ '#ffffba', '#ffb3ba', '#baffc9', '#bae1ff'] 
t = turtle.Pen() 
turtle.bgcolor("#101010")
def fibo(n):
    fibos = [0,1]
    for _ in range(n):
        fibos.append(fibos[-1] + fibos[-2])
    return fibos[2:]

t.left(90)
t.forward(10)
for i in range(4):
    t.pencolor(colors[i%4]) 
    t.width(7) 
    t.forward(i) 
    t.right(90)
    for r in fibo(7):
        t.circle(r*7,180)

turtle.done()
