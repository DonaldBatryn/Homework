require 'rspec'
require 'dessert'

=begin
Instructions: implement all of the pending specs (the `it` statements without blocks)! Be sure to look over the solutions when you're done.
=end

describe Dessert do
  dessert = Dessert.new("cake", 10, "Donnie") 
  let(:chef) { double("chef") }

  describe "#initialize" do
    it "sets a type" do
      expect(dessert.type).to eq("cake")
    end

    it "sets a quantity" do
      expect(dessert.quantity).to eq (10)
    end

    it "starts ingredients as an empty array" do
      expect(dessert.ingredients).to eq([])
    end

    it "raises an argument error when given a non-integer quantity" 
      
  end

  describe "#add_ingredient" do
    it "adds an ingredient to the ingredients array" do 
      dessert.add_ingredient("flour")
      expect(dessert.ingredients.length).to eq(1)
    end
  end

  describe "#mix!" do
    it "shuffles the ingredient array" do 
      dessert.add_ingredient("sugar")
      dessert.add_ingredient("vanilla")
      original = dessert.ingredients
      mixed = dessert.mix!
      expect(mixed).to_not eq(original)
      
    end
  end

  describe "#eat" do
    it "subtracts an amount from the quantity" do
        dessert.eat(1)
        expect(dessert.quantity).to eq(9)
    end

    it "raises an error if the amount is greater than the quantity" do
      expect(dessert.eat(11)).to raise("Not enough left!")
    end
  end

  describe "#serve" do
    it "contains the titleized version of the chef's name" do
      expect(dessert.serve).to
    end
  end

  describe "#make_more" do
    it "calls bake on the dessert's chef with the dessert passed in"
  end
end
