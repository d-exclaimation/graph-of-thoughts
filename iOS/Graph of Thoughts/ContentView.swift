//
//  ContentView.swift
//  Graph of Thoughts
//
//  Created by Vincent on 3/5/21.
//

import SwiftUI

struct ContentView: View {
    
    @State var thoughts = [Thought]()
    
    var body: some View {
        List {
            ForEach(thoughts) { thought in
                Text(thought.title)
            }
            Button {} label: {
                Text("Reload")
                    .padding(10)
                    .background(Color.gray)
                    .cornerRadius(buttonRadius)
                    .foregroundColor(.blue)
            }
        }
        .accentColor(.red)
    }
    
    func loadAll() {
        getRequest(
            uri: Env.apiEndPoint,
            headers: [
                "Authorization": Env.tokenAuth
            ]
        ) { (result: [Thought]) -> Void in
            thoughts = result
        }
    }
    
    
    let buttonRadius: CGFloat = 10
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
