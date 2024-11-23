namespace NewTalents;

public class Calculadora
{
    private List<string> h;
    public Calculadora()
    {
        h = new List<string>();
    }
    public int somar(int a, int b)
    {
        h.Insert(0, $"{a}+{b} = {a+b}");
        return a + b;
    }
    public int subtrair(int a, int b)
    {
        h.Insert(0, $"{a}-{b} = {a-b}");
        return a - b;
    }
    public int multiplicar(int a, int b)
    {
        h.Insert(0, $"{a}*{b} = {a*b}");
        return a * b;
    }
    public int dividir(int a, int b)
    {
        h.Insert(0, $"{a}/{b} = {a/b}");
        return a / b;
    }
    public List<string> historico()
    {
        h.RemoveRange(3, h.Count - 3);
        return h;
    }
}